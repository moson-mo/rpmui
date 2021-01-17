package main

import (
	"log"

	"github.com/kardianos/osext"
	"github.com/webview/webview"
)

func main() {
	path, err := osext.ExecutableFolder()
	if err != nil {
		log.Fatal(err)
	}
	w := webview.New(false)
	defer w.Destroy()
	w.SetTitle("Renoir Power Metrics")
	w.SetSize(800, 600, webview.HintNone)
	w.Navigate("file://" + path + "/web/main.html")
	w.Run()
}
