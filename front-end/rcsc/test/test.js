const assert = require('assert')
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = "bhutanexamfactory-d7ea2";
const myId = 'karma'
const myEmail = 'kzoepa@gmail.com'
const theirId = 'yoezer'
const myAuth = {uid: myId,email: myEmail};
const theirEmail = 'yoezer@gmail.com';
function getFirestore(auth){
    return firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: auth}).firestore();
}
describe('RSCS Prep site',() => {

    it('cant read items in the EnglishQuestions collection',async () => {
        const db = getFirestore(null);
        const testDoc = db.collection('EnglishQuestions').doc("testDoc");
        await firebase.assertFails(testDoc.get());
    })
    it('cant read items in the Questions collection',async () => {
        const db = getFirestore(null);
        const testDoc = db.collection('Questions').doc("testDoc");
        await firebase.assertFails(testDoc.get());
    })
    // it('can read items in the read only collection',async () => {
    //      const db = getFirestore(null);
    //      const testDoc = db.collection('readOnly').doc("testDoc");
    //      await firebase.assertSucceeds(testDoc.get());
    //  })
    // it('cant write items in the read only collection',async () => {
    //     const db = getFirestore(null);
    //     const testDoc = db.collection('readOnly').doc("testDoc");
    //     await firebase.assertFails(testDoc.set({food: "apple"}));
    // })
    it('can read items in the questions collection',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection('Questions').doc("testDoc");
        await firebase.assertSucceeds(testDoc.get());
    })
    it('cant write items in the questions collection',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection('Questions').doc("testDoc");
        await firebase.assertFails(testDoc.set({food: "apple"}));
    })

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ENGLISH QUESTION COLLECTION TEST -   -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
    it('can read items in the EnglishQuestions collection',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection('EnglishQuestions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.get());
    })
    it('cant write items in the EnglishQuestions collection',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection('EnglishQuestions').doc('testDoc');
        await firebase.assertFails(testDoc.set({food: 'apple'}));
    })
    it('cant read items in the yoezer@gmail.com/EnglishQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(theirEmail).doc('EnglishQuestions');
        await firebase.assertFails(testDoc.get());
    })
    it('can read items in the kzoepa@gmail.com/EnglishQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(myEmail).doc('EnglishQuestions').collection('Questions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.get());
    })
    it('cant write items in the yoezer@gmail.com/EnglishQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(theirEmail).doc('EnglishQuestions').collection('Questions').doc('testDoc');
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })
    it('can write items in the kzoepa@gmail.com/EnglishQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(myEmail).doc('EnglishQuestions').collection('Questions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.set({food:"apple"}));
    })
//------------------------------ENGLISH QUESTION COLLECTION TEST END------------------------------
    it('cant read items in the yoezer@gmail.com/MathQuestions/',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(theirEmail).doc('MathQuestions');
        await firebase.assertFails(testDoc.get());
    })
    it('can read items in the kzoepa@gmail.com/MathQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(myEmail).doc('MathQuestions').collection('Questions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.get());
    })
    it('cant write items in the yoezer@gmail.com/MathQuestion',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(theirEmail).doc('MathQuestions');
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })
    it('can write items in the kzoepa@gmail.com/MathQuestions/Questions/alldocs',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(myEmail).doc('MathQuestions').collection('Questions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.set({food:"apple"}));
    })
    it('can write items in the kzoepa@gmail.com/userProfile',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(myEmail).doc('UserProfile')
        await firebase.assertSucceeds(testDoc.set({food:"apple"}));
    })
    it('cant write items in the yoezer@gmail.com/userProfile',async () => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection(theirEmail).doc('UserProfile');
        await firebase.assertFails(testDoc.set({food:"apple"}));
    })
    it('cant write on practiceExamOnSignup', async () =>{
        const db = getFirestore(myAuth);
        const testDoc = db.collection('PracticeExamOnSignUp').doc('English').collection('EnglishQuestions').doc('testDoc');
        await firebase.assertFails(testDoc.set({food: 'apple'}));
    })
    it('can read on PracticeExamOnSignUp',async () =>{
        const db = getFirestore(myAuth);
        const testDoc = db.collection('PracticeExamOnSignUp').doc('English').collection('EnglishQuestions').doc('testDoc');
        await firebase.assertSucceeds(testDoc.get());
    })
    it('cant read on Feedback',async () =>{
        const db = getFirestore(myAuth);
        const testDoc = db.collection('Feedback').doc(myEmail);
        await firebase.assertFails(testDoc.get());
    })
    it('can create on Feedback',async () =>{
        const db = getFirestore(myAuth);
        const testDoc = db.collection('Feedback').doc();
        await firebase.assertSucceeds(testDoc.set({foo: "bar"}));
    })
    it('can read on UserEmail/EnglishQuestions/Questions/qs',async ()=>{
        const db = getFirestore(myAuth);
        const testDox = db.collection(myEmail).doc('EnglishQuestions').collection('Questions').doc('testDoc');
        await firebase.assertSucceeds(testDox.get());
    })
})
