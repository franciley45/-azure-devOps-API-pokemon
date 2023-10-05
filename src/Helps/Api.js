import axios from 'axios';

export const gelAll = async (counter) => {
    const URL =`https://pokeapi.co/api/v2/pokemon?offset=${counter}&limit=20`
  try {
    const { data: {results } } = await axios.get(URL)
    const result =  results.map((e) => e.url)
    return  result
  } catch (error) {
    console.log(error)
  }
}

export const getAllById = async (counter) => {
    const getall = await gelAll(counter)
try {
   return Promise.all(
    getall.map(async (e) => {
        const { data: { base_experience, name, sprites: { front_default }, id } } = await axios.get(e)
        return { base_experience, name, front_default, id }
    })
  )
} catch (error) {
    console.log(error)
}
}

export const getById = async (id) => {
  const URL =`https://pokeapi.co/api/v2/pokemon/${id}`
  try {
    const { data: { base_experience, name, sprites: { other: {home: {front_default } }}, id } }= await axios.get(URL)
    return { base_experience, name, front_default, id }
  } catch (error) {
    console.log(error)
  }
}

(async () => {
      const test = await getById(2)
    console.log(test)
})()