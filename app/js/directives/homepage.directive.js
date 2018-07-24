var home = angular.module('home.directive', []);

home.directive('homePage', function() {
    return {
        templateUrl: 'views/homepage.html',
        controller: function($scope, $state) {
            $scope.updateList = function() {
                console.log("search results updated")
            }
            $scope.testSearchResults = paginateResults(getTestSearchResults());
            $scope.categoriesList = getTestCategories();
            $scope.currentNavItem = "Services";
            $scope.userIsApplyingFilters = true;
            $scope.applyFilters = function() {
                console.log("Filters applied.")
            }
            $scope.slider = {
                minValue: 20,
                maxValue: 100,
                options: {
                    floor: 0,
                    ceil: 250,
                    step: 1,
                    pushRange: false
                }
            };
            $scope.priceRange = "0"
            $scope.testTags = [
                "Tag 1", "Tag 2", "Long tag3", "Tag 4", "Tag 5",
                "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10"
            ]

            $scope.currentCategoryFilter = {"category":""}
        }
    };
})

function getTestSearchResults() {
    return [
        {
            source: '/assets/images/test/postings/fashion.jpeg',
            title: 'Fashion',
            userRating: '3.8',
            price: '$25',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/haircut.jpeg',
            title: 'Haircut',
            userRating: '3.8',
            price: '$25',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/healthwellness.jpeg',
            title: 'Health & Wellness',
            userRating: '4.8',
            price: '$15',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/nailpainting.jpeg',
            title: 'Nail Painting',
            userRating: '2.8',
            price: '$250',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/personaltraining.jpeg',
            title: 'Personal Training',
            userRating: '3.8',
            price: '$25',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/tech.jpeg',
            title: 'Tech Help',
            userRating: '3.8',
            price: '$25',
            postingUser: 'John Doe'
        },
        {
            source: '/assets/images/test/postings/tutoring.jpeg',
            title: 'Tutoring',
            userRating: '3.8',
            price: '$25',
            postingUser: 'John Doe'
        },
    ];

    // Slice them into chunks to properly display
}

function paginateResults(array) {
    var arr = [], perRow = 3;
    while(array.length > 0) {
        arr.push(array.splice(0, perRow))
    }
    return arr;
}

function getTestCategories() {
    return [
        {"Name":"None"},
        {
            "Name":"Some Category 1",
            "ParentId":null,
            "Categories": [
                {
                    "Name":"Deceptive Marketing",
                    "ParentId":19,
                    "Categories":[ ],
                    "Id":24,
                    "ModifiedDate":"2015-08-06T07:49:53.0489545",
                    "CreatedDate":"2015-08-06T15:49:51.707"
                },
                {
                    "Name":"Aggressive Agents",
                    "ParentId":19,
                    "Categories":[ ],
                    "Id":25,
                    "ModifiedDate":"2015-08-06T07:50:10.0026497",
                    "CreatedDate":"2015-08-06T15:50:08.63"
                }
            ],
            "Id":19,
            "ModifiedDate":"08/06/2015 @ 7:49AM",
            "CreatedDate":"08/06/2015 @ 3:49PM"
        },
        {
            "Name":"Some Category 2",
            "ParentId":null,
            "Categories": [
                {
                    "Name":"Security Deposit",
                    "ParentId":20,
                    "Categories":[ ],
                    "Id":21,
                    "ModifiedDate":"2015-08-06T07:49:30.3966895",
                    "CreatedDate":"2015-08-06T15:49:25.8"
                },
                {
                    "Name":"Meter",
                    "ParentId":20,
                    "Categories":[ ],
                    "Id":22,
                    "ModifiedDate":"2015-08-06T07:49:34.6571155",
                    "CreatedDate":"2015-08-06T15:49:33.3"
                },
                {
                    "Name":"Bill",
                    "ParentId":20,
                    "Categories":[ ],
                    "Id":23,
                    "ModifiedDate":"2015-08-06T07:49:41.7268224",
                    "CreatedDate":"2015-08-06T15:49:40.357"
                }
            ],
            "Id":20,
            "ModifiedDate":"08/06/2015 @ 7:49AM",
            "CreatedDate":"08/06/2015 @ 3:49PM"
        }
    ];
}
