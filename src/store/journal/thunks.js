import { doc , collection, setDoc} from "firebase/firestore";
import { FirebaseDb } from "../../firebase";
import {  } from "firebase/firestore/lite";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote())
        console.log("startNewNote")
        const { uid } = getState().auth;
        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime()
        }
        const newDoc = doc(collection(FirebaseDb, `${uid}/journal/notes`))
        console.log({newDoc})
        await setDoc(newDoc, newNote) 
        console.warn({ newDoc })
        newNote.id=newDoc.id
        dispatch(setActiveNote(newNote))
        dispatch(addNewEmptyNote(newNote))
    }
}
export const startLoadingNotes = () => {
    return async (dispatch,getState) => {
        const { uid } = getState().auth
        if (!uid) throw new Error("Uid does not exist")
            const userNotes = await loadNotes(uid)
        
        dispatch(setNotes(userNotes))
    }
}
export const startUpdatingNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth;
        const { active:activeNote } = getState().journal;
        const noteToSaveOnFirebase = { ...activeNote }
        delete noteToSaveOnFirebase.id
        const noteToUpdate = doc(FirebaseDb, `${uid}/journal/notes/${activeNote.id}`)
        await setDoc(noteToUpdate, noteToSaveOnFirebase, { merge: true }) 
        dispatch(updateNote(activeNote))
    }
}