package org.enso.reference;
import org.enso.syntax.text.DocParser;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

class Traverser {
    public static void main(String... args) throws Exception {
        Path dir = Paths.get("std-lib");
        Files.walk(dir).forEach(path -> showFile(path.toFile()));
    }

    public static void showFile(File file) {
        if (file.isDirectory()) {
            System.out.println("Directory: " + file.getAbsolutePath());
        } else {
            System.out.println("File: " + file.getAbsolutePath());
        }
    }
}

class Main {
    public static void main(String[] args) {
        System.out.println("Enso Reference");
        Traverser t = new Traverser();
        try {
            t.main();
        } catch (Exception e) {
            e.printStackTrace();
        }
//        DocParser dp = new DocParser();
//        System.out.println(dp.runMatched("*Enso* is ~cool~ superCool"));
    }
}