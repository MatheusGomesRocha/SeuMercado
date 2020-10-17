import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

export default {

    // Auths

    signUp: (name, email, cpf, password, navigation, setEmail) => {
        let id = Math.floor(Math.random() * (999999999 - 1));
        let idString = id.toString();

        const res =
            auth()      // Cria um usuário com email e senha no firebase Auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    
                    
                    auth()
                        .signInWithEmailAndPassword(email, password);  // Depois de criar no Auth é feito o login
                    const user = auth().currentUser;    // Pega o usuário logado (que acabou de logar junto com o cadastro)
                    firestore()                         // Seta os dados preenchidos em uma collection "users" no firestore
                        .collection('users')
                        .doc(user.uid)                      // O doc que é a identificação do Documento, irá receber o uid(ID) do usuário
                        .set({
                            id: user.uid,
                            name: name,
                            cpf: cpf,
                            email: email,
                            password: password,
                        });

                        navigation.reset({
                            routes: [
                                { name: 'apptab' }
                            ]
                        });

                        setEmail(email);

                    firestore()
                        .collection('cart')
                        .doc(user.uid)
                        .set({
                            id: idString,
                            userId: user.uid,
                        })
                        .then(() => {
                            auth()
                                .signInWithEmailAndPassword(email, password)
                                .then(() => {


                                    Alert.alert(
                                        "Cadastro",
                                        "Conta criada com sucesso. Já está logado",
                                        [
                                            { text: "OK" }
                                        ],
                                        { cancelable: false }
                                    );

                                });

                        })
                })
                .catch(error => {
                    if (error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
                        Alert.alert(
                            "Error",
                            "Este email já está cadastro, tente outro",
                            [
                                { text: "OK" }
                            ],
                            { cancelable: false }
                        );
                    }
                })

    },

    login: async (email, password, navigation, setEmail) => {
        const res =
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {

                    navigation.reset({
                        routes: [
                            { name: 'apptab' }
                        ]
                    });
                    setEmail(email)

                })
                .catch(error => {   // Caso email ou senha foram digitados incorretamentes
                    if (error) {
                        Alert.alert(
                            "Error",
                            "Email ou senha incorreto",
                            [
                                { text: "OK" }
                            ],
                            { cancelable: false }
                        );
                    }
                });

    },

    // Get Functions

    getUsers: async (id) => {
        let list = [];

        let results = await firestore().collection('users').get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                name: data.name,
            })
        })


        return list;
    },

    getUserLogin: async (id) => {
        let list = [];

        let results = await firestore().collection('users').where('id', '==', id).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                name: data.name,
            })
        })

        return list;
    },

    getProducts: async (setList) => {
        let list = [];

        let results = await firestore().collection('products').get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                name: data.name,
                type: data.type,
                description: data.description,
                price: data.price,
                img: data.img,
            })
        })

        return list
    },

    getProductsFiltered: async (type) => {
        let list = [];

        let results = await firestore().collection('products').where('type', '==', type).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                name: data.name,
                type: data.type,
                description: data.description,
                price: data.price,
                img: data.img,
            })
        })

        return list
    },

    getProductsCart: (id, setArrayCart) => {
        firestore()
            .collection('cart')
            .doc(id)
            .onSnapshot((result) => {
                if (result.exists) {
                    let data = result.data();

                    if (data.products) {
                        setArrayCart(data.products)
                    }
                }
            })
    },

    getFilters: async () => {
        let list = [];

        let results = await firestore().collection('types').orderBy('id', 'asc').get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                name: data.name,
                img: data.img,
            })
        })

        return list
    },

    getUserOrders: async (id, status) => {          // Pega todos os pedidos do usuários
        var list = [];

        let results = await firestore().collection('orders').where('userId', '==', id).where('status', '==', status).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                order: data.order.products.products,
                adress: data.order.adress,
                subtotal: data.subtotal,
                quantidadeTotal: data.quantidadeTotal,
                status: data.status,
            })
        })

        return list
    },

    getUserOrdersInfo: async (id) => {           // Pega os detalhes do pedido do usuário
        var list = [];

        let results = await firestore().collection('orders').where('id', '==', id).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                order: data.order.products.products,
                adress: data.order.adress,
                subtotal: data.subtotal,
                quantidadeTotal: data.quantidadeTotal,
                status: data.status,
            })
        })

        return list
    },

    // Função que pega todos os chats criados pelo o usuário logado e mostra. setChatList é uma state da ChatScreen que passou como parâmetro para setar corretamente
    getChat: (userId, setChatList) => {
        return firestore()
            .collection('users')
            .doc(userId)
            .onSnapshot((result) => {
                if (result.exists) {
                    let data = result.data();

                    if (data.chats) {
                        setChatList(data.chats)
                    }
                }
            })
    },

    // Função que pega o conteúdo do chat (a conversa) entre os dois usuários
    getContentChat: (chatId, setMessage, setUsers) => {
        return firestore()
            .collection('chats')
            .doc(chatId)
            .onSnapshot((result) => {
                if (result.exists) {
                    let data = result.data();
                    setMessage(data.messages);
                    setUsers(data.users);
                }
            })
    },

    getUserAdress: async (userId) => {
        var list = [];

        let results = await firestore().collection('adress').where('userId', '==', userId).get();

        results.forEach(result => {
            let data = result.data();
            list.push({
                id: data.id,
                type: data.type,
                bairro: data.bairro,
                rua: data.rua,
                number: data.number,
                reference: data.reference,
            })
        })

        return list
    },

    setIntoCart: async (userId, productId, productName, productImg, productType, productPrice, productQtd, subtotal, navigation) => {

        const res =
            await firestore()
                .collection('cart')
                .doc(userId)
                .update({
                    products: firestore.FieldValue.arrayUnion ({
                        id: productId,
                        name: productName,
                        img: productImg,
                        type: productType,
                        quantidade: productQtd,
                        price: productPrice,
                    })
                })
                .then(() => {
                    navigation.navigate('apptab')

                    Alert.alert(
                        "Sucesso",
                        "O produto foi adicionado ao seu carrinho",
                        [
                            { text: "OK" }
                        ],
                        { cancelable: false }
                    );

                    return true;
                })
                .catch(error => {
                    if (error) {
                        Alert.alert(
                            "Error",
                            "Houve algum problema, tente novamente mais tarde",
                            [
                                { text: "OK" }
                            ],
                            { cancelable: false }
                        );
                    }
                })

        return res;
    },

    setUserOrder: async (userId, userName, products, subtotal, quantidadeTotal, navigation) => {
        let id = Math.floor(Math.random() * (999999999 - 1));
        let idString = id.toString();

        const res =
            await firestore()
                .collection('orders')
                .add({
                    id: idString,
                    userId: userId,
                    status: 'pendente',
                    userName: userName,
                    subtotal: subtotal,
                    quantidadeTotal: quantidadeTotal,
                    order: {
                        products: { products },

                        payment: 'card',
                        adress: {
                            rua: 'Santos Dummont',
                            number: '3008',
                            bairro: 'Tabapuazinho',
                            referencia: 'Bessa X Ap-02 - Arena Bola na Rede ou Uma Industria'
                        }
                    }
                })
                .then(() => {
                    navigation.reset({
                        routes: [
                            { name: 'apptab' }
                        ]
                    });
                    Alert.alert(
                        "Sucesso",
                        "Seu pedido foi com feito com sucesso. Agora você pode acompanha-lo na parte de Pedidos Em Andamento.",
                        [
                            { text: "OK" }
                        ],
                        { cancelable: false }
                    );



                    return true;
                })
                .catch(error => {
                    if (error) {
                        Alert.alert(
                            "Error",
                            "Houve algum problema, tente novamente mais tarde",
                            [
                                { text: "OK" }
                            ],
                            { cancelable: false }
                        );
                    }
                })

        return res;
    },

    // Cria um novo chat com o usuário logado e com o usuário que ele selecionou
    setNewChat: async (userId, userName, targetId, targetName, setChatId) => {
        var reference = false;      // Variável para saber se já existe um chat entre esses 2 usuários

        const res = await firestore()       // Primeiro é procurado os dados da collection chats em que tenha userId e targetId
            .collection('chats')
            .where('users', '==', [userId || targetId, targetId || userId])
            .get()

        res.forEach(item => {        // Depois é feito um foreach para acessar esses dados. 
            if (item) {              // Se tiver algum dado, ele retorna true. então atribua a Var reference como true
                reference = true;
            }
        })

        if (userId === targetId) {   // Outra verificação só para garantir caso o usuário tente criar uma conversa com ele mesmo (LOL)
            return console.log('error');
        }

        if (!reference) {            // Se a Var reference for false. Então execute a função de add um novo chat normalmente
            let res =
                await firestore()
                    .collection('chats')
                    .add({
                        users: [userId, targetId],
                    });

            let res1 =
                firestore()
                    .collection('users')
                    .doc(userId)
                    .update({
                        chats: firestore.FieldValue.arrayUnion({
                            chatId: res.id,
                            title: targetName,
                            with: targetId
                        })
                    });

            let res2 =
                firestore()
                    .collection('users')
                    .doc(targetId)
                    .update({
                        chats: firestore.FieldValue.arrayUnion({
                            chatId: res.id,
                            title: userName,
                            with: userId
                        })
                    })

            setChatId(res.id);
        } else {
            return console.log('error')
        }
    },

    // envia uma mensagem para a collection chats e simultâneamente faz um update na Collection dos usuários contendo a ultima mensagem enviada e o horário dela
    setMessage: async (chatId, userId, content, users) => {
        let now = new Date();
        let minutes = now.getMinutes();
        
        minutes = minutes < 0 ? '0'+minutes : minutes;
        
        let hour = now.getHours() + ':' + minutes;


        firestore()
            .collection('chats')
            .doc(chatId)
            .update({
                messages: firestore.FieldValue.arrayUnion({
                    author: userId,
                    content: content,
                    date: hour
                })
            });

        for (let i in users) {
            let u = await firestore()
                .collection('users')
                .doc(users[i])
                .get();

            let uData = u.data();

            if (uData.chats) {
                let chats = [...uData.chats];

                for (let e in chats) {
                    if (chats[e].chatId == chatId) {
                        chats[e].lastMessage = content;
                        chats[e].lastMessageUser = userId;
                        chats[e].date = hour;
                    }
                }

                firestore()
                    .collection('users')
                    .doc(users[i])
                    .update({
                        chats
                    })
            }
        }
    },

    setNewAdress: (userId, type, bairro, rua, number, reference) => {
        let id = Math.floor(Math.random() * (999999999 - 1));
        let idString = id.toString();

        firestore()
        .collection('adress')
        .add({
            id: idString,
            userId: userId,
            type: type,
            bairro: bairro,
            rua: rua,
            number: number,
            reference: reference,
        })
    },
    
    setOrderAdress: (userId, id, type, bairro, rua, number, reference) => {
        firestore()
        .collection('users')
        .doc(userId)
        .update({
            adress: [{
                id: id,
                type: type,
                bairro: bairro,
                rua: rua,
                number: number,
                reference: reference,
            }]
        })
    },


    // updateProfile: async (userId, name, email, password) => {
    //     const res = 
    //         firestore()     // Realiza o update 
    //         .collection('users')
    //         .doc(userId)
    //         .update({
    //             name: name,
    //             email: email,
    //             pass: password,                    
    //         })
    //         .then(() => {
    //             Alert.alert(
    //                 "Sucesso",
    //                 "Usuário editado",
    //                 [
    //                   { text: "OK" }
    //                 ],
    //                 { cancelable: false }
    //               );          
    //         });

    //     return res;
    // },


    // Delete Functions

    deleteCart: async (userId) => {

        firestore()
        .collection('cart')
        .doc(userId)
        .update({
            products: firestore.FieldValue.delete()
        })
    }




}