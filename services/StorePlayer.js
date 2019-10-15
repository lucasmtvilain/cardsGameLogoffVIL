import {AsyncStorage} from 'react-native'
const Player = require('./Player').Player;


module.exports.StorePlayer = class  {

    // Fonction qui sauvegarde dans le telephone le joueur
    _storeRegister = async (Player) => {
        try {
            //Player = new Player(0, "Non Connecter","tomato","");
            // sauvegarde
            await AsyncStorage.setItem('PlayerConnect', JSON.stringify(Player));

            // debug
            const player = await AsyncStorage.getItem('PlayerConnect');
            var affJoueur = JSON.parse(player);
            console.log(player);
            // fin debug



        } catch (error) {
            // Error saving data
            console.log(error);
        }
    };

    // recupérer les données du profil joueur du l'appareil
    _storeGetPlayer  = async () =>{

        // Recuperation du player
        let playerStore= await AsyncStorage.getItem('PlayerConnect');
        //console.log(playerStore);

        // Si il n'y a pas de profil on le créer
        if(playerStore === null){
            playerStore = new Player(0, "Nouvelle connexion","","");
            _storeRegister(playerStore);
        }

        //console.log("Dans la fonction : "+playerStore);

        return playerStore ;
    };




};