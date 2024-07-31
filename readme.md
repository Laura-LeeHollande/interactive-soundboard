# Sound Board Project

<details>
  <summary>📖 Table of Contents</summary>

- [Sound Board Project](#sound-board-project)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Code Overview](#code-overview)
    - [HTML Structure](#html-structure)
    - [JavaScript Logic](#javascript-logic)
    - [CSS Styling](#css-styling)
  - [Contributing](#contributing)
  - [Acknowledgements and glossary](#acknowledgements-and-glossary)
    - [Acknowledgements](#acknowledgements)
    - [Glossary](#glossary)
  
</details>

This project is a web-based sound board application[^1] that allows users to play various sound effects by clicking on buttons. The project utilizes the p5.js library[^2] for rendering the canvas and handling sound playback.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/Laura-LeeHollande/interactive-soundboard.git
    ```

2. Navigate to the project directory:

    ```sh
    cd sound-board
    ```

3. Open `index.html` in your preferred web browser.

## Usage

Once the project is set up and running, you will see a web page with several buttons. Each button corresponds to a different sound effect. Click on any button to play the associated sound.

![Sound Board](img/soundBoard.png)

## Project Structure

The project consists of the following key files:

- `index.html`: The main HTML file that sets up the structure of the web page.
- `sketch.js`: The main JavaScript file that contains the p5.js setup and draw functions, as well as the logic for loading and playing sounds.
- `p5.min.js`, `p5.sound.js`, `p5.sound.min.js`: The p5.js library and its sound extension.

## Code Overview

### HTML Structure

The `index.html` file sets up the basic structure of the web page, including linking to the necessary CSS and JavaScript files.

### JavaScript Logic

The `sketch.js` file contains the core logic for the sound board. Here's a brief overview of its structure:

- **Setup Function**: Initializes the canvas and loads the sound files.
- **Draw Function**: Continuously updates the canvas (though in this project, it might not be used extensively).
- **Sound Loading**: Uses the `loadSound` function from the p5.js library to load sound files.
- **Button Creation**: Dynamically creates buttons for each sound effect and assigns a click event to play the corresponding sound.

### CSS Styling

The project includes a `styles.css` file to handle the visual styling of the web page. Key elements styled include:

- **Buttons**: Styled to be visually appealing and easy to click.
- **Canvas**: Ensures the canvas is properly sized and positioned.

## Contributing

If you would like to [contribute](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project) to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Thank you.

## Acknowledgements and glossary

### Acknowledgements

- [p5.js](https://p5js.org/) - The library used for rendering and sound playback.
- [Favicon.io](https://favicon.io/) - For providing icons used in the project.
- [Mixkit](https://mixkit.co/free-sound-effects/) - For providing sound effects used in the project.
- [Codedex](https://www.codedex.io/projects/build-an-interactive-soundboard-with-p5js) - For providing the project idea and structure.

### Glossary

[^1]: A sound board is a device or software application that allows users to play various sound effects by clicking on buttons.
[^2]: p5.js is a JavaScript library for creative coding.
