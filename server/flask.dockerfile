
FROM python:3.12.2

ENV FLASK_APP=app.py
ENV FLASK_ENV=production
ENV UPLOAD_FOLDER=/usr/src/app/images
ENV ALLOWED_EXTENSIONS=png,jpg,jpeg
ENV DATABASE_URI=sqlite:///database.db


WORKDIR /usr/src/app


COPY requirements.txt .
RUN pip install --verbose --no-cache-dir -r requirements.txt

COPY . .


EXPOSE 8080


CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]
