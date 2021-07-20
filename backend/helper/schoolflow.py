
""""This module handling API Data request from https://api.data.gov"""

import os
import requests, json

from copy import deepcopy

""""To avoid the brandwidth costs down, we will just 
download the page through the provided url with the API key"""




# Download the JSON data from https://api.data.gov's API



# our API key
API_KEY = 'B4VrzY3Qx6R6x4ucn4q17QmudIYbwvrG6IAvZ1Pn'

# Put the API key in a dictionary
params = dict(api_key=API_KEY)


# API url
url ='https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&='

# Storing the result in url and pass url and params in a response object
res = requests.get(url, params=params)

# check for any error
res.raise_for_status()

# Store schoolFlow API data into a python-json variable parent and child keys

schoolData = res.json()

# Explore JSON data in a dictonary


#work with r dic keys
#print(r.keys())
#dict_keys(['metadata', 'results'])

# storing in a list of nested dictionaries
items_dict = schoolData['results']

#getting the 1st item
#school_dict = items_dict[0]
school_dict = items_dict[0:5]

#Printing school info in console
#print(f"School Name: {school_dict['school']['name']}")
#print(f"Total Students: {school_dict['latest']['student']['demographics']['race_ethnicity']}")


# Getting school info
def get_school_json_info():
	#loop through the school data dic
	for data in school_dict:
		#list to save school info
		dictList = []
		#delete key/pair null values
		del_k = {}

		#total of student
		size = get_student_size()
		in_data = {'students': size}
		dictList.append(in_data)

		#removing null value before rendering
		#school alias value maybe null, so I won't render null value
		del_k = dict([(k, v) for k, v in data['school'].items() if v])

		#use the deepcopy function for the nested dictionary
		dictList.append(deepcopy(del_k))
	return dictList


			

# Getting student size
def get_student_size():
	val = {}
	for data in school_dict:
		#check key-value pair to get total students
		for k, value in data['latest'].items():
			if isinstance(value, dict):
				val[k] = value
				return val[k].get('size')



# Getting program_percentage
def program_percentage():
	val = {}
	percent = []
	for data in school_dict: 
		for k, v in data['latest']['academics']['program_percentage'].items():
			# insert new key value
			val = {k:v}
			# store k-value in a list
			percent.append(val)
	return percent


# Getting program_percentage
def race_ethnicity():
	val= {}
	race = []
	for data in school_dict: 
		for k, v in data['latest']['student']['demographics']['race_ethnicity'].items():
			#removing null value before rendering
			if v:
				# insert only new correct key Not None value
				val = {k:v}
				print(val)
				# store k-value in a list
				race.append(val)
	return race

#printing race_ethnicity with value Not None in console
# {'aian': 0.002}
# {'nhpi': 0.0009}
# {'asian': 0.0642}
# {'black': 0.0197}
# {'white': 0.7096}
# {'unknown': 0.0151}
# {'hispanic': 0.0528}
# {'two_or_more': 0.0342}
# {'non_resident_alien': 0.1015}