# setup our Falsk server

import os
from flask import Flask, json, jsonify, request
from flask_cors import CORS, cross_origin

#import our modules here
from helper.schoolflow import get_school_json_info, program_percentage, race_ethnicity
from helper.school import School, SchoolSchema



app = Flask(__name__)

CORS(app)




@app.route('/school')
def get_school_flow():

	#getting school object
	school_obj = get_school_json_info()

	#instance of school
	schema = SchoolSchema(many=True)
	try:
		# Serialization/deserialization of school data models 
		#to make sure we got school data we wanted
		school = schema.dump(
			school_obj
			)
		return jsonify(school)
	except Exception as e:
		raise e


@app.route('/percentage')
def get_prog_percentage():
	#getting percentage object
	percent_obj = program_percentage()
	try:
		percent = json.loads(json.dumps(percent_obj))
		return jsonify(percent)
	except Exception as e:
		raise e



@app.route('/ethnicity')
def get_race_ethnicity():
	#getting percentage object
	race_obj = race_ethnicity()
	try:
		race = json.loads(json.dumps(race_obj))
		return jsonify(race)
	except Exception as e:
		raise e

