import ID from './uniqueID'

export const defaultState = [
    {
      id: ID(), 
      content: 'Zakupy', 
      created: new Date().toLocaleString(),
      isEdit: "",
      priority: 'low'
    },
    {
      id: ID(), 
      content: 'Nauka Angulara', 
      created: new Date().toLocaleString(), 
      isEdit: "",
      priority: 'medium'
  },
    {
      id: ID(), 
      content: 'Nauka Ract', 
      created: new Date().toLocaleString(), 
      isEdit: "",
      priority: 'important'
  },
  ];