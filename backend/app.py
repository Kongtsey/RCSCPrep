import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# SETTING UP THE CREDENTIALS.
cred = credentials.Certificate("./config.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

# FETCHING THE DATA
data = db.collection(u'Questions').stream()
for doc in data:
    #print(u'{} => {}'.format(doc.id, doc.to_dict()))
    print(doc.id('UserHasResponded'))



