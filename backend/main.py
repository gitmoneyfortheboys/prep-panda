import csv
import random
from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

DATABASE_URL = "postgresql://user:password@postgres:5432/database"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.get('/api/questions')
async def get_questions():
    print(os.getcwd())
    print(os.path.exists('/app/database/maths.csv'))  # Replace the path with the path you want to check
    # Read questions from the CSV file
    questions = []
    with open('/app/database/maths.csv', newline='', encoding='utf-8-sig') as csvfile:
        reader = csv.DictReader(csvfile)
        id = 1
        for row in reader:
            print(row.keys())
            try:
                question = {
                    'id': id,
                    'questionText': row['question'],
                    'answers': {
                        'A': row['choice_a'],
                        'B': row['choice_b'],
                        'C': row['choice_c'],
                        'D': row['choice_d'],
                    },
                    'correctAnswer': row['correct_answer'],
                    'explanation': row['explanation'],
                }
                questions.append(question)
                id += 1
            except KeyError as e:
                print(f"Missing key {e} in row {id}: {row}")
    random.shuffle(questions)
    # Return questions as a JSON object
    return questions


