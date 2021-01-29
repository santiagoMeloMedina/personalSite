
from django.core.mail import send_mail
from .constants import EMAIL_SENDER, EMAIL_SUBJECT

def sendEmail(name, email, message, **kwargs):
    message = "{} -- {}".format(name, message)
    res = send_mail(
        subject = EMAIL_SUBJECT,
        message = message,
        from_email = email, 
        recipient_list = [EMAIL_SENDER]
    )
    return res