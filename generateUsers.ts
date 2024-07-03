import fs from 'fs'
import { faker } from '@faker-js/faker';

const users = Array.from({ length: 200 }, () => {
  const phone = faker.phone.number().replace(/\s/g, "").replace(/[- ]/g, "").replace("(", "").replace(")", "").replace("x", "").replace(/[.]/g, "")
  // console.log(phone)
  return (
    {
      "name": faker.person.fullName(),
      "phone": `(${phone.substring(0, 2)}) 9${phone.substring(2, 6)}-${phone.substring(6, 10)}`,
      "company": faker.company.name()
    })
})
const people = { "participantes": users }
console.log(people)

fs.writeFileSync('./src/assets/participantes.json', JSON.stringify(people))
