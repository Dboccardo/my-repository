import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private location: Location, private route: ActivatedRoute) { }
  title$;

  ngOnDestroy() { 
    console.log("GitHubprofile OnDestroy");
  }

  ngOnInit() {
    console.log("GitHubProfile OnInit");
    this.title$ = this.route.data;
    // this.route.snapshot.paramMap.get('id');

    // this.route.paramMap
    //   .subscribe(paramMap => { 
    //     console.log("PARAM MAP", paramMap);
        
    //   });
  }

  go() { 
    // this.router.navigate();
    // this.location.back();
    this.location.go('/posts');
  }
}
