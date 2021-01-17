# rpmui
## Renoir power metrics UI
</br>

A simple UI app showing some Renoir power metrics.</br>
It consists of </br>
* A small executable making use of WebKit in order to render HTML</br>
* The HTML/JS frontend which fetches and displays power metrics via [Chart.js](https://www.chartjs.org/).

The HTML page (main.html) can also be opened directly in your browser instead.
</br>

![rpmui](https://github.com/moson-mo/rpmui/raw/master/screenshots/rpmui.png?inline=true)
</br>

## How to install

#### Manual

Binaries are available from the [releases](https://github.com/moson-mo/rpmui/releases) page.</br>

## How to build

* Install go from your package manager or download it from the [Golang](https://golang.org/dl/) site.
* Clone repo with `git clone https://github.com/moson-mo/rpmui.git`
* Change to rpmui dir: `cd rpmui`
* Build with `go build`
</br>

## How to customize

In the default configuration, the graphs have been made for an 8-core AMD Renoir model.</br>
You can customize *main.html* to your own needs...
</br>

## Dependencies / Libraries used

* [rpms](https://gitlab.com/moson-mo/rpms/) - Renoir power metrics server. *(Needs to be installed upfront)*
* [webview](https://github.com/webview/webview/) - A tiny cross-platform webview library for C/C++/Golang to build modern cross-platform GUIs.
* [osext](https://github.com/kardianos/osext/) - Extensions to the "os" (golang) package.
* [Chart.js](https://chartjs.org/) - Simple JavaScript library to create charts.
* [jQuery](https://jquery.com/) - jQuery JavaScript framework.
</br>