/// <reference path="babylon.js" />

"use strict";

var canvas;
var engine;
var scene;
var camera;
var mesh;
var light;

document.addEventListener("DOMContentLoaded", startBabylonJS, false);

function startBabylonJS() {
    if (BABYLON.Engine.isSupported()) {
        canvas = document.getElementById("renderCanvas");
        engine = new BABYLON.Engine(canvas, true);

        scene = new BABYLON.Scene(engine);
        //camera = new BABYLON.FreeCamera("myFirstCam", new BABYLON.Vector3(0, 2, -10), scene);
        //camera.attachControl(canvas);
        //camera.checkCollisions = true;
        //camera.applyGravity = true;

        //new ArcRotateCamera(name, alpha, beta, radius, target, scene)
        var arcCamera = new BABYLON.ArcRotateCamera("ArcRotateCamera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
        //attachControl(element, noPreventDefault, useCtrlForPanning) → void
        arcCamera.attachControl(canvas, false, true);
        
        //static CreateGround(name, width, height, subdivisions, scene, updatable) → Mesh
        var ground = new BABYLON.Mesh.CreateGround("ground", 32, 32, 1, scene, true);
        ground.checkCollisions = true;

        light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
        light = new BABYLON.PointLight("pointlight", new BABYLON.Vector3(5, 10, -5), scene);
        light.diffuse = new BABYLON.Color3.Purple();

        var cube = new BABYLON.Mesh.CreateBox("box", 2, scene);
        cube.position = new BABYLON.Vector3(0, 2, 0);
        cube.checkCollisions = true;

        // Once the scene is loaded, just register a render loop to render it
        engine.runRenderLoop(function () {
            cube.rotation.y += 0.05;
            cube.rotation.x += 0.05;
            scene.render();
        });
    }
}
