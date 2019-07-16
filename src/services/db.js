import { AsyncStorage } from 'react-native';

const db = {

    get(key){
        try {
            const value = AsyncStorage.getItem(key)
            return value
        } catch (e) {
            return 'error ' + e
        }
    },
    getAllKeys(){
        try {
            const value = AsyncStorage.getAllKeys()
            return value            
            //alert(value)

        } catch (e) {
            return e
        }
    },

    save(key, value){

        try {
            return AsyncStorage.setItem(toString(key), JSON.stringify(value))
        } catch (e) {
            return e
        }
    },

    update(key, value){
        try{
            return AsyncStorage.mergeItem(toString(key), value)        
        }catch(e){
            return e
        }
    },
    
    clearAll(){
        AsyncStorage.clear()
    },

    del(key){
        try{
            return AsyncStorage.removeItem(toString(key))        
        }catch(e){
            return e
        }
    }
}

export default db 