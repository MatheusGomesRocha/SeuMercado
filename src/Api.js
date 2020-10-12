import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export default {

    // Auths

    signUp: async(name, email, cpf, password, navigation) => {
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
                })
                .then(() => {
                    auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        navigation.reset({
                            routes:[
                                {name: 'apptab'}
                            ]
                        });
                        
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
                return true;
            })
            .catch(error => {
                if(error.code == 'auth/email-already-in-use') {     // Erro que acontece caso já tenha um usuário com o mesmo email
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

            return res;
    },

    login: async (email, password, navigation) => {
        const res = 
                auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigation.reset({
                        routes:[
                            {name: 'apptab'}
                        ]
                    });
                    
                    Alert.alert(
                        "Login",
                        "Login feito com sucesso.",
                        [
                          { text: "OK" }
                        ],
                        { cancelable: false }
                    );

                    return true;
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

        return res;  
    },

    // Get Functions

    getUserLogin: async (id) => {
        let list = [];

        const subscriber = firestore()
            .collection('users')
            .doc(id)
            .onSnapshot(documentSnapshot => {
                let data = documentSnapshot.data();
                list.push({
                    id: data.id,
                    name: data.name,
                })
            });

        return list;
        
    },

    getProducts: async () => {
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
 
    getProductsCart: async (id) => {
         let list = [];

         let results = await firestore().collection('cart').where('userId', '==', id).get();
  
         results.forEach(result => {
             let data = result.data();
             list.push({
                 id: data.id,
                 userId: data.userId,
                 items: data.items,
		 
             })
         })
  				
         return list
    },
 
    getOrderFinish: async () => {
         let list = [];
  
         let results = await firestore().collection('orderfinish').get();
  
         results.forEach(result => {
             let data = result.data();
             list.push({
                 id: data.id,
                 date: data.date,
                 quantidade: data.quantidade,
                 status: data.status,
                 price: data.price,
             })
         })
  
         return list
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


    // Set Function

    setIntoCart: async (userId, productId, productName, productImg, productType, productQtd, productPrice, navigation) => {
        let id = Math.floor(Math.random() * (999999999 - 1));
        let idString = id.toString();

        const res =
            firestore()
            .collection('cart')
            .add({
                id: idString,
                userId: userId,
                status: 'pendente',
                items: {
                        id: productId,
                        name: productName,
                        img: productImg,
                        type: productType,
                        quantidade: productQtd,
                        price: productPrice,
                }
            })
            .then(() => {
                navigation.reset({
                    routes:[
                        {name: 'apptab'}
                    ]
                });

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
                if(error) {
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

    

}