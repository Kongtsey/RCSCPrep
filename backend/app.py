import flask
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("./config.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()
documento = db.collection(u'Questions').document(u'ques')
doc = documento.get()
print(u'Document data: {}'.format(doc.to_dict()))
