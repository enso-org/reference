package org.enso.reference;
import org.enso.syntax.text.*;

import java.io.File;
import java.io.*;
import java.util.Scanner;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

class Traverser {
    public static void main(String... args) throws Exception {
        Parser ps = new Parser();
        Path dir = Paths.get("std-lib");
        Path gen = Paths.get("generated");
        Files.walk(dir).forEach(path -> showFile(path.toFile(), ps));
    }

    public static void showFile(File file, Parser parser) {
        if (file.isDirectory()) {
//            System.out.println("Directory: " + file.getPath());
        } else {
            if (file.getPath().endsWith(".enso")) {
                System.out.println("File: " + file.getPath());
                try {
                    Scanner sc = new Scanner(file);
                    sc.useDelimiter("\\Z");

                    AST.ASTOf<Shape.Module> module = parser.run(sc.next());
                    AST.ASTOf<Shape.Module> dropMeta = parser.dropMacroMeta(module);
//                    AST.ASTOf<Shape> doc  = DocParserRunner.createDocs(dropMeta);
//                    String code = DocParserHTMLGenerator.generateHTMLForEveryDocumented(doc);
//
//                    System.out.println(code);
                } catch (FileNotFoundException ex) {
                    System.out.println("Couldn't read file.");
                }
            }
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

        DocParser dp = new DocParser();
        System.out.println(dp.runMatched("*Enso* is ~cool~ superCool"));
    }
}