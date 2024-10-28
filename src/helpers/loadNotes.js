import { collection } from "firebase/firestore"
import { FirebaseDb } from "../firebase"
import { getDocs } from "firebase/firestore"

export const loadNotes = async(uid="") => {
    const collectionRef = collection(FirebaseDb, `${uid}/journal/notes`)
    const docs=await getDocs(collectionRef)
    const notes=[]
    docs.forEach(doc =>{ 
        notes.push({id:doc.id,...doc.data()})
    })
    return notes
}
