<template>
  <header>
    <div class="wrapper">
      <h1>Filmes</h1>
      <ul>
        <li v-for="(item, index) in filmes" :key='index'>
        {{ item.filme}}
        </li>
      </ul>
        <hr>
        <button @click="useFilter">Filtrar</button>
        <ul>
          <li v-for="(item, index) in FilmesFiltrados" :key='index'>
        {{item.filme}}
        </li>
        </ul>
        <hr>
        <button @click="useForeach">Foreach - Console</button>
        <hr>
        <button @click="useMap">Map</button>
        <h1>Idade dos filmes até 2023</h1>
        <ul>
          <li v-for="(item, index) in idadeTotalFilmes" :key='index'>{{item}} </li>
        </ul>
        <hr>
        <button @click="useReduce">Reduce</button>
        <br>
        {{ reduceValor }}
    </div>
  </header>

</template>


<script>

export default {
  data() {
    return {
      filmes: 
      [
        { 
          filme:'Homem-Aranha',
          ano: 2002,
          estudio: 'Marvel Studios'
        },
        { 
          filme:'Homem-Formiga',
          ano: 2015,
          estudio: 'Marvel Studios'
        },
        { 
          filme:'Capitão América: Guerra Civil',
          ano: 2016,
          estudio: 'Marvel Studios'
        },
        { 
          filme:'Homem de Ferro',
          ano: 2008,
          estudio: 'Marvel Studios'
        },
        { 
          filme:'Capitã Marvel',
          ano: 2019,
          estudio: 'Marvel Studios'
        },
        { 
          filme:'Divertida Mente',
          ano: 2015,
          estudio: 'Pixar'
        },
        { 
          filme:'Soul',
          ano: 2020,
          estudio: 'Pixar'
        },
        { 
          filme:'Carros',
          ano: 2006,
          estudio: 'Pixar'
        },
        { 
          filme:'Valente',
          ano: 2012,
          estudio: 'Pixar'
        },
        { 
          filme:'Os Incríveis',
          ano: 2004,
          estudio: 'Pixar'
        },
        { 
          filme:'Rei Leão',
          ano: 1994,
          estudio: 'Walt Disney'
        },
        { 
          filme:'Irmão Urso',
          ano: 2003,
          estudio: 'Walt Disney'
        },
        { 
          filme:'A Princesa e o Sapo',
          ano: 2009,
          estudio: 'Walt Disney'
        },
        { 
          filme:'Detona Ralph',
          ano: 2012,
          estudio: 'Walt Disney'
        },
        { 
          filme:'Operação Big Hero',
          ano: 2014,
          estudio: 'Walt Disney'
        },
      ],
      FilmesFiltrados: [],
      idadeTotalFilmes: [],
      foreachAnos: [],
      reduceValor: null,
    }
},
    methods: {
        useFilter() {
          this.FilmesFiltrados = this.filmes.filter((filmes) => {
            return filmes.estudio === 'Pixar'
          })
        },
        useForeach() {
         this.anos = this.filmes.forEach(element => {
            this.foreachAnos = element.ano
            console.log(this.foreachAnos)
          });

        },
        useMap() {
          let anoFilmes =  [2002, 1995, 2005, 2014]
        let anoFilmesTotal = anoFilmes.map((item => {
            return 2023 - item
        }))
          this.idadeTotalFilmes = anoFilmesTotal
        },
        useReduce(){
          let anoFilmes =  [2002, 1995, 2005, 2014]
          const valorInicial = 5;
          const somaComValorInicial = anoFilmes.reduce(
            (acumulador, valorAtual) => acumulador + valorAtual,
            valorInicial
          );
          this.reduceValor = somaComValorInicial
        }
      }
}

</script>

<style scoped>
button {
  margin: 20px;
  padding: 20px;
}
hr{
  margin: 20px;
}
h1{
  text-align: center;
}
</style>
