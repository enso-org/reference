ThisBuild / organization := "org.enso"

lazy val hello = (project in file("."))
  .settings(
    name := "reference"
  )
