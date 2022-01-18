<template>
<div>
  <h1 class="pb-2">
     <icons :icon="['fas', 'star']" /> 
       (Ejemplo)
     <icons :icon="['fas', 'star']" /> 
       Tabla que obtiene datos de una API Json externa  
     <icons :icon="['fas', 'award']" /> 
   </h1>
   <p> A continuación se muestra un ejemplo de obtención de datos externos a partir de una 
      <b-link href='https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page='>API Json</b-link>
    <p>

     
     

    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Stars</th>
            <th scope="col">Avatar</th>
            <th scope="col">Github Link</th>
            <th scope="col">Homepage</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="repo in showRepos" :key="repo.id" class="mt-2">
            <th scope="row">
                {{ repositories.indexOf(repo) + 1 }}
            </th>
            <td>
                {{ repo.name }}
            </td>
            <td>
                {{ repo.stargazers_count.toLocaleString() }}
            </td>
            <td>
                <img v-if="repo.owner.avatar_url" class="avatar" :src="repo.owner.avatar_url"/>
            </td>
            <td>
                <a :href="repo.html_url" target="_blank">Link</a>
            </td>
            <td>
                <a v-if="repo.homepage" :href="repo.homepage" target="_blank">Homepage</a>
                <p v-else>No homepage</p>
            </td>
        </tr>
        </tbody>
    </table>


        <!-- <Tabla :showRepos="showRepos" :repositories="repositories"/> -->
<!-- PAGINACION -->
        <div v-if="loading" class="justify-content-center">
            <icons :icon="['fas', 'spinner']" class="fa-spinner"/>
        </div>

        <div class="my-4">
            <ul class="pagination pagination-md justify-content-center text-center">
                <li class="page-item" :class="page === 1 ? 'disabled' : ''">
                    <a
                            class="page-link"
                            @click="prevPage"
                    >
                        Previous
                    </a>
                </li>
                <li class="page-link" style="background-color: inherit">
                    {{ page }} of {{ lastPage }}
                </li>
                <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
                    <a class="page-link"
                       @click="nextPage"
                    >
                        Next
                    </a>
                </li>
            </ul>
        </div><!--./Pagination -->
        </div>
</template>

<script>
import axios from 'axios';
const githubAPI = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100&page=';
  
  export default {
  props: {  
    name: {
        type: String,
        default: 'Tabla'
      }
    },
    data() {
      return {
        githubPage: 1,
        repositories: [],
        page: 1,
        loading: false,
        perPage: 5
      }
    },
    mounted() {
      this.fetchData()
    },
    computed: {
      showRepos() {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.repositories.slice(start, end);
      },
      lastPage() {
        let length = this.repositories.length;
        return length / this.perPage;
      }
    },
    methods: {
      fetchData() {
        this.loading = true;
        axios.get(githubAPI + this.githubPage)
          .then(({data}) => {
            this.repositories = this.repositories.concat(data.items);
            this.loading = false;
          })
          .catch((err) => {
            throw err;
          })
      },
      prevPage() {
        this.page--;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      nextPage() {
        if (this.page == this.lastPage - 1) {
          this.githubPage++;
          this.fetchData();
        }
        this.page++;
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  }
</script>
 

<style>
    @keyframes spinner {
        to {
            transform: rotate(360deg);
        }
    }
    .fa-spinner {
        animation: spinner 1s linear infinite;
    }
    a:hover {
        cursor: pointer;
    }
    
    .avatar {
        max-width: 50px;
    }
</style>