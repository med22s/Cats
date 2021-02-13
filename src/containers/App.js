import React from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component {
    constructor(){
        super();
        this.state={
            search:'',
            cats:[]
        }
    }


     onSearchchange=(e)=>{
        this.setState({search:e.target.value});
    }

     componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
           return response.json();
       }).then(data=>{
           this.setState({cats:data});
       }).catch(err=>console.log(err));
        
    }

    render(){

        const {cats,search}=this.state;

        const filteredArray=cats.filter(cat=>{
            return cat.name.toLowerCase().includes(search.toLowerCase())
        });

        return !filteredArray.length ? (<h1>Loading !!!</h1>)
        :(
                <div className='tc fs-normal'>
                    <h1>Cats Paradise</h1>
                    <SearchBox search={this.onSearchchange}/>

                        <Scroll>

                            <ErrorBoundary>
                          <CardList cats={filteredArray} />

                            </ErrorBoundary>
                            
                       </Scroll>

                </div>
            )

        

       
    }
};


export default App;
