import React from 'react'

type GreetingsParams={
    firstName: String,
    lastName: String,
    age?: number
    optional?: String //Question mark for optional parameter. Even if we don't pass it it wont show error
}

//  If no value is passed for age then it will be 5
const Greetings = ({firstName, lastName, age = 5, optional }: GreetingsParams) => {
  return (
    <div>Hello {firstName} {lastName}! You are {(age+5)} years old. This is optional parameter {optional}. </div>
  )
}

export default Greetings