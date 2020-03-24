from flask import Blueprint
from flask import jsonify
from flask import request
from . import db
form .models import Movie

main = Blueprint('main', __name__)

@main.route('/add/movie', methods=['POST'])
def add_movie():
    movie_data = request.get_json()


    return 'Done', 201


@main.route('/movies')
def movies():
    print("we are in movie")
    movies = []

    return jsonify({"movies": movies})