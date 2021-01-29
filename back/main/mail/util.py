
from functools import wraps

def auth(func):
    @wraps(func)
    def help(request, *args, **kwargs):
        return func(request, *args, **kwargs)
    return help