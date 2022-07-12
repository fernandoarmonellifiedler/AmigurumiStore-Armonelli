
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, query, where, addDoc, Timestamp } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBr18GU20a580QyvB4pCTHBQS7viGk9abs",
    authDomain: "amigurumi-store-8c06f.firebaseapp.com",
    projectId: "amigurumi-store-8c06f",
    storageBucket: "amigurumi-store-8c06f.appspot.com",
    messagingSenderId: "424665261988",
    appId: "1:424665261988:web:bbddbc325ae38e1b880331"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function getItems() {
    const itemsColletion = collection(appFirestore, "amigurumi")
    const itemsSnapshot = await getDocs(itemsColletion);

    let respuesta = itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return respuesta;
}

export async function getItemsByCategory(categoryId) {
    const itemsColletion = collection(appFirestore, "amigurumi")

    // Create a query against the collection.
    const q = query(itemsColletion, where("category", "==", categoryId));
    const itemsSnapshot = await getDocs(q);

    let respuesta = itemsSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })

    return respuesta;
}

export async function getItem(id) {
    const docRef = doc(appFirestore, "amigurumi", id)

    const docSnapshot = await getDoc(docRef)

    return {
        id: docSnapshot.id,
        ...docSnapshot.data()
    }
}

export async function createOrder(dataOrder) {
    const orderColletion = collection(appFirestore, "amigurumiOrders")
    const orderTimestamp = Timestamp.now()

    const orderWithTimestamp = {
        order: {...dataOrder},
        time: orderTimestamp
    }

    const orderCreated = await addDoc(orderColletion, orderWithTimestamp)

    return orderCreated
}

/* export async function getOrder(id) {
    const docRef = doc(appFirestore, "amigurumiOrders", id)

    const docSnapshot = await getDoc(docRef)

    return {
        id: docSnapshot.id,
        ...docSnapshot.data()
    }
} */

export default appFirestore;