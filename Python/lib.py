class Person:
    def __init__(self, name):
        self.name = name
        self.life_points = 100
        
    def hit(self, person):
        person.life_points -= 10
        
    def is_dead(self):
        if self.life_points > 0 :
            return False
        return True

class Wizard(Person):
    def __init__(self, name):
        super().__init__(name)
        self.life_points = 80

    def hit(self, person):
        person.life_points -= 15
        return person


class HealthPotion:
    
    def was_used_by(self, person):
        
        person.gained_life_points(10)
        
        
class Inventory:
    
    def __init__(self):
        self.items = []
        
    def add_object(self, item):
        self.items.append(item)
        
    def get_objects(self):
        return self.items