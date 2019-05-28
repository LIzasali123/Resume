<template> 
    <div class="projectGal">
        <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
         <div class="projectGal__project">
            <div class="projectGal__img">
                <img src="../../assets/project.jpeg"  alt="project img">
            </div>
            <p class="projectGal__heading">Yelp camp</p>
            <p class="projectGal__icon">icon to git</p> 
            <button class="projectGal__button">View Project</button>
        </div>
        <!-- <div class="projectGal__project">2</div>
        <div class="projectGal__project">3</div>
        <div class="projectGal__project">4</div>
        <div class="projectGal__project">5</div>
        <div class="projectGal__project">6</div>
        <div class="projectGal__project">7</div>
        <div class="projectGal__project">8</div>
        <div class="projectGal__project">9</div> -->
        <!-- <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div> -->
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .projectGal {
        grid-row: 7 / 8;
        grid-column: 1 / 5;
        
        display: grid;
        grid-template-columns: repeat(3, minmax(10rem, 1fr));
        // grid-template-rows: repeat(3, 27rem);
        justify-content: center;
        grid-gap: 4rem;
        background-color: #f9f7f6;

        &__project {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            // grid-template-rows: 20rem repeat(2, 1fr);
            grid-gap: 1rem;
            border-radius: 3%;
            background-color: white;
            box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.14);
        }
        &__img {
            grid-column: 1 / -1;
            grid-row: 1 / 2;

            padding: 1rem;
            width: 100%;
            height: 20rem;;
            z-index: 1;

        }
        &__button {
            grid-column: 1 / -1;

            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 200;
            border: none;
            background-color: #acaa90;
        }
        &__heading {
            display: flex;   
        }
        &__icon {
            display: flex;
        }
    }

</style>
