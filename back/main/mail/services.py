
from django.core.mail import send_mail
from .constants import EMAIL_SENDER, EMAIL_SUBJECT
import os

def sendEmail(name, email, message, **kwargs):
    file = open(os.path.join(os.path.dirname(__file__), 'resources/email_template.html'), 'r')
    message = ''.join(file.readlines()).replace('@@email@@', email).replace('@@message@@', message)
    res = send_mail(
        subject = name,
        message = message,
        from_email = email, 
        recipient_list = [EMAIL_SENDER]
    )
    file.close()
    return res