import './App.scss';
import LinkButton from './component/LinkButton';

function App() {

  const data = [
    {
      id: 'login_1',
      label: 'Login One',
      link: ''
    },
    {
      id: 'login_2',
      label: 'Login Two',
      link: ''
    },
    {
      id: 'login_3',
      label: 'Login Three',
      link: ''
    },
    {
      id: 'login_4',
      label: 'Login Four',
      link: ''
    },
    {
      id: 'login_5',
      label: 'Login Five',
      link: ''
    },
  ]

  return (
    <div className={'wrapper'}>
      <div className="main_container">
          {
            data.map((e, index)=>{
              return (
                <LinkButton 
                  key={e.id}
                  url={e.link}
                  id={e.id}
                  label={e.label}
                />
              )
            })
          }
      </div>
    </div>
  );
}

export default App;
