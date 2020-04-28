import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {

    // emit an event to the app component. thus make it listenable to app component
    @Output() featureSelected = new EventEmitter<string>();
    // so here when v claick a link it emits an event
    OnSelect(feature: string){
        this.featureSelected.emit(feature);
    }
    
}
