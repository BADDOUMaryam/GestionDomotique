export class ServiceGestionDomotique{
  errors:number;
  valider:boolean=false;
  etat:boolean=false;
initialiser(){
  this.valider=false;
}
    
    objets=[
        {
          id:1,
          nom:'tv',
          emplacement:'chambre',
          status:false,
          estConnecte:false,
        },
        {
            id:2,
            nom:'pc',
            emplacement:'chambre',
            status:true,
          estConnecte:false,
       },
       {
        id:3,
        nom:'clima',
        emplacement:'salon',
        status:false,
        estConnecte:false,
       }
      ];

      ajouterObjet(nom:string, emplacement:string){
        const objet={
            id:0,
            nom:'',
            emplacement:'',
            status:false,
          estConnecte:false,
         
          
          };
        objet.nom=nom;
        objet.emplacement=emplacement;
        objet.status=false;
     
        objet.id=this.objets[this.objets.length-1].id+1;
         this.objets.push(objet);
        

      }
      allumerTout(){
 this.initialiser();
        for(let objet of this.objets){
          if(objet.estConnecte==false){
            this.errors=-1;
            this.valider=true;
          }
          else{
            objet.status=true;
  
          }
        
        }
      }
      eteindreTout(){
        this.initialiser();
        for(let objet of this.objets){
          if(objet.estConnecte==false){
            this.errors=-1;
            this.valider=true;
          }
          else{
            objet.status=false;
          }
        }
      }
      connecterTout(){
        this.initialiser();
        for(let objet of this.objets){
          objet.estConnecte=true;
        }
      }
      deconnecterTout(){
        this.initialiser();
        for(let objet of this.objets){
          objet.estConnecte=false;
        }
      }
      allumerUn(id:number){
        this.initialiser();
        if(this.objets[id-1].estConnecte==false){
          this.errors=-1;
          this.valider=true;
         

        }else{
          this.objets[id-1].status=true;
          this.errors=1;
        }

      }
      connecterUn(id:number){
       this.initialiser();
        this.objets[id-1].estConnecte=true;
      }
      deconncterUn(id:number){
        this.initialiser();
        this.objets[id-1].estConnecte=false;
      }
      eteindreUn(id:number){
       this.initialiser();
        
        if(this.objets[id-1].estConnecte==false){
          this.errors=-1;
          this.valider=true;
         

        }else{
          this.objets[id-1].status=false;
          this.errors=1;
        }
      }
      afficher(){
       //this.etat=true;
        if(this.etat==true){
          this.etat=false
        }
        else{
          this.etat=true;
        }

      }
      hide(){
        this.etat=false;
      }
      getObjet(id: number) {
        for(const ob of this.objets)
          if(ob.id === id) {return ob; }
      }
}