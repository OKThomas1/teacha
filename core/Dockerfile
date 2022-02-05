FROM python

WORKDIR /app/django
COPY requirements.txt /app/django

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver"]