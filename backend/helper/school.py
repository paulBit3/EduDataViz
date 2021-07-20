""""This module will handle business logic. It will process our mapping entities"""


from marshmallow import Schema, fields, post_load


# Defining school class
class School():
	#our constructor
	def __init__(self, name, alias, school_url, city, state, zip, students):
		self.name = name
		self.alias = alias
		self.school_url = school_url
		self.city = city
		self.state = state
		self.zip = zip
		self.students = students

    
    #deserialize for empty string
	def _deserialize(self, alias, attr, obj):
		if self.alias == 'null':
			return None

	def get_student_total(self, students):
		return f'Student#({self.students})'

	#returning or printing objects
	def __repr__(self):
		return f'School({self.name}, {self.alias}, {self.school_url}, {self.city}, {self.state}, {self.zip}, {self.students})'


# School schema
class SchoolSchema(Schema):
	name = fields.Str(required=True)
	alias = fields.Str(required=False,)
	school_url = fields.Url(required=True)
	city = fields.Str(required=True)
	state = fields.Str(required=True)
	zip = fields.Str(required=True)
	students = fields.Int()

	@post_load
	def load_size(self, data, **kwargs):
		return School(**data)



