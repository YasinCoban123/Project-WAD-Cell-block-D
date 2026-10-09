  
  <template>
  <footer id="footer">
    <div id="footer-logo">
      <router-link to="/"><img id="img-logo" src="../assets/img/logo.png" alt="Blok D logo" width="67"></router-link>
    </div>
    <div id="footer-links">      
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/AboutMe">About</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/materials">Materials</router-link></li>
        <li><router-link to="/tools">Tools</router-link></li>
        <li><router-link to="/MachineTime">Machines</router-link></li>
        <li><router-link to="/WorkAt">Work at Blok D</router-link></li>
        <p>⸻⸻⸻⸻⸻⸻⸻⸻</p>
      </ul>
    </div>
  </footer>
  </template>

  <style scoped>
  #footer {
   display: flex;
   background-color: rgb(251, 145, 31);
   height: 230px;
  #footer-links
  {
    text-decoration: none;
    margin-top: 30px;
    display: flex;
    justify-content:flex-end;
  }
  #footer-logo
  {
    margin-top: 60px;
    
  }
}
</style>