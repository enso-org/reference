ThisBuild / organization := "org.enso"

lazy val main = (project in file("."))
  .settings(
    name := "reference",
    unmanagedBase := baseDirectory.value / "jars",
    libraryDependencies += "org.enso.syntax.text" % "DocParser" % "1.0" from "file:///Users/maciej/NewByteOrder/reference-java/jars/parser-assembly.jar"
  )
