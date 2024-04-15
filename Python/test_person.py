import pytest
from lib import Person, Wizard

def test_person_hit():
    person1 = Person("Alice")
    person2 = Person("Bob")
    person1.hit(person2)
    assert person2.life_points == 90

def test_person_is_dead():
    person = Person("Charlie")
    assert not person.is_dead()

def test_wizard_hit():
    wizard = Wizard("Gandalf")
    person = Person("Frodo")
    person = wizard.hit(person)
    assert person.life_points == 65

def test_wizard_life_points():
    wizard = Wizard("Merlin")
    assert wizard.life_points == 80
