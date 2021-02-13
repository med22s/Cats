
import Card from './Card';

const cardList=({cats})=>{
    return (

        cats.map(cat=>{
            return <Card key={cat.id} id={cat.id} name={cat.name} email={cat.email} />
        })

    );
};


export default cardList;