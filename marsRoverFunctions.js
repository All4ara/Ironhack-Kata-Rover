let x;
let y;

const mars = [
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}],
  [{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y},{x,y}]
];

// Rover and details on location and direction its pointing
const rover = {
    direction: 'N',
    x: 0,
    y: 0,
    //initialize beginning of path
    travelLog:  [{x: 0, y: 0}],
    position: [0,0],
    obstacle: [[3,3],[4,3]]
}
// Rotates rover  Left 90deg
function turnLeft(rover) {
    switch (rover.direction) {
      case 'N':
        rover.direction = 'W'
        break;
      case 'W':
        rover.direction = 'S';
        break;
      case 'S':
        rover.direction = 'E';
        break;
      case 'E':
        rover.direction = 'N';
        break;
    }
    
    console.log(`Kata Rover turned left - Facing: ${rover.direction}`);
    
    // Update path
    let newPosition = { x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
};
// Rotates rover Right 90deg 
function turnRight(rover) {
    switch (rover.direction) {
      case 'N':
        rover.direction = 'E';
        break;
      case 'S':
        rover.direction = 'W';
        break;
      case 'E':
        rover.direction = 'S';
        break;
      case 'W':
        rover.direction = 'N';
        break;
    }
    
    console.log(`Kata Rover turned right - Facing: ${rover.direction}`);
    
    // Update path
    let newPosition = { x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
};
// Moves rover Foward 1 space   
function moveForward(rover) {
    if (rover.x >= 0 && rover.x < 9 && rover.y >= 0 && rover.y < 9) {
      switch(rover.direction) {
        case 'N':
          rover.x--;
          break;
        case 'E':
          rover.y++;
          break;
        case 'S':
          rover.x++;
          break;
        case 'W':
          rover.y--;
          break;
      }
      
      
      console.log("Kata Rover moved forward - New Rover Position: [" + rover.x + ", " + rover.y + "]");
      
      let newTravel =  { x: rover.x, y: rover.y};
        rover.travelLog.push(newTravel);
        rover.position.splice(0,1, rover.x);
        rover.position.splice(1,2, rover.y);
    } else {
      
      console.log('Signal Distruption! - Please Stay On The Map! - Move Back Two Spaces To Get Back On The Right Path');
      
    }
};

// Moves rover Backards 1 space  
function moveBackward(rover) {
    if (rover.x >= 0 && rover.x < 9 && rover.y >= 0 && rover.y < 9) {
      switch(rover.direction) {
        case 'N':
          rover.x++;
          break;
        case 'E':
          rover.y--;
          break;
        case 'S':
          rover.x--;
          break;
        case 'W':
          rover.y++;
          break;
    }
      
      console.log("Kata Rover moved backward - New Rover Position: [" + rover.x + ", " + rover.y + "]");
      
      let newTravel = { x: rover.x, y: rover.y};
        rover.travelLog.push(newTravel);
        rover.position.splice(0,1, rover.x);
        rover.position.splice(1,2, rover.y);
    } else {
      
      console.log('Signal Distruption! - Please Stay On The Map! - Move Forward Two Spaces To Get Back On The Right Path');
      
    }
};


/* Creates list of 4 commands. Each command is linked to call the 4 previously made functions to send the rover a chain of commands. This function validates commands*/
function commandList (commands) {
    // Loops through argument called
    for(let i = 0; i < commands.length; i++) {
      // Seperates each character  by creating an array starting the first letter as index0
      let command = commands[i];
      // Validates to make sure valid command is made
      
      if (command === 'f' || command === 'l' || command === 'r' || command === 'b') {
          // looks for Obstacals and stops rover when it finds one on its path
          if (rover.position[0] === rover.obstacle[0][0] && rover.position[1] === rover.obstacle[0][1]) {
            console.log('!Danger! - Obstacle at ' + rover.obstacle[0] + ' - Can Not Continue Forward');
          } else {
              switch (command) {
              case 'f':
                moveForward(rover)
                break;
              case 'l':
                turnLeft(rover)
                break;
              case 'r':
                turnRight(rover)
                break;
              case 'b':
                moveBackward(rover)
                break;
              }
         }  
      } else {
          console.log('Error - Incorrect Command Character - Valid Commands Are f,l,r,b');
          break;
      } 
    }
};

console.log(`Kata Rover Starting Position: [${rover.x}, ${rover.y}] - Facing: ${rover.direction}`);

commandList('rffrfflfrff');