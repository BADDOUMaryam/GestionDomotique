export class ServiceGestionDomotique{
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
        for(let objet of this.objets){
          objet.status=true;
        }
      }
      eteindreTout(){
        for(let objet of this.objets){
          objet.status=false;
        }
      }
      connecterTout(){
        for(let objet of this.objets){
          objet.estConnecte=true;
        }
      }
      deconnecterTout(){
        for(let objet of this.objets){
          objet.estConnecte=false;
        }
      }
      allumerUn(id:number){
       this.objets[id-1].status=true;


      }
      connecterUn(id:number){
        this.objets[id-1].estConnecte=true;
      }
      deconncterUn(id:number){
        this.objets[id-1].estConnecte=false;
      }
      eteindreUn(id:number){
        this.objets[id-1].status=false;
      }
}