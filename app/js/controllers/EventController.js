/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   EventController.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: anonymous <anonymous@student.42.fr>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/06/12 13:35:03 by anonymous         #+#    #+#             */
/*   Updated: 2016/06/12 17:14:07 by anonymous        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
'use strict';
eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = "<span style='color:red'>Hi There</span>";
        $scope.boolValue = true;
        $scope.myStyle = { color: "red" };
        $scope.myClass = "blue";
        $scope.buttonDisabled = true;


        $scope.sortOrder="name";
        $scope.event = {
            name: "Angular Boot Camp ",
            date: "1460000015626",
            time: "14:20 pm",
            location: {
                address: "Huangpu Danshuilu SoHoB2308",
                city: "Shanghai",
                province: "SH"
            },
            imageUrl: "img/angularjs-logo.png",
            sessions: [{
                name: "AAAAAAAAAAAA",
                creatorName: "A",
                duration: "1 hr",
                level: "Advanced",
                abstract: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                upVoteCount: 9
            }, {
                name: "BBBBBBBBBBBB",
                creatorName: "B",
                duration: "2 hr",
                level: "Advanced",
                abstract: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                upVoteCount: 2
            }, {
                name: "CCCCCCCCCCCC",
                creatorName: "C",
                duration: "3 hr",
                level: "Advanced",
                abstract: "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC",
                upVoteCount: 1
            }, {
                name: "DDDDDDDDDDDD",
                creatorName: "D",
                duration: "4 hr",
                level: "Intermediate",
                abstract: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
                upVoteCount: 4
            }]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    });
