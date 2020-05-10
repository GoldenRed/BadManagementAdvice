export default async function getRandomAdvice(){
  const response = await fetch('https://3mrd7mo9lb.execute-api.eu-north-1.amazonaws.com/beta/randomadvice');
  const data = await response.json();
  const advice = {
    adviceUser: data.user,
    adviceDate: data.date,
    adviceBody: data.Body,
    advicePoints: data.points,
  }
  return advice
};