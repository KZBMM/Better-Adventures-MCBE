//This is a simple c++ code made to replace all instances of a certain string in a JSON document with a different string for all files in a given directory.
//Usefull when there are major changes done to namespaces/JSON component object names. KZBMM <3.
#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>

using namespace std; //@SplinedWelshman please don't comment!
// Function to replace all occurrences of a word in a string


void replaceAll(std::string &str, const std::string &search, const std::string &replace) {
    size_t pos = 0;
    while ((pos = str.find(search, pos)) != std::string::npos) {
        str.replace(pos, search.length(), replace);
        pos += replace.length();
    }
}

void editjson(string filename) {
    string  dir0 = "blocks/";
    string  dir1 = "copies/";

    // Open the input file
    std::ifstream inputFile(dir0 + filename);
    if (!inputFile) {
        std::cerr << "Error: Cannot open input file " << filename << std::endl;
    }

    // Open the output file
    std::ofstream outputFile(dir1 + filename);
    if (!outputFile) {
        std::cerr << "Error: Cannot open output file" << std::endl;
    }

    // Read and process the contents line by line
    std::string line;
    while (std::getline(inputFile, line)) {
        // Replace "property" with "state" and "properties" with "states"
        replaceAll(line, "property", "state");
        replaceAll(line, "properties", "states");

        // Write the modified line to the output file
        outputFile << line << '\n';
    }

    // Close the input and output files
    inputFile.close();
    outputFile.close();

    std::cout << "File copied with word replacements." << std::endl;
}


int main() {
    // Directory path to list files from
    const char *dir_path = "blocks"; // Change this to the desired directory path

    // Open the directory
    DIR *dir = opendir(dir_path);

    // Check if the directory could be opened
    if (dir == NULL) {
        perror("Unable to open directory");
        return 1;
    }

    struct dirent *entry;

    // Loop through each file in the directory
    while ((entry = readdir(dir)) != NULL) {
        if (entry->d_type == DT_REG) { // Check if it's a regular file
            editjson(entry->d_name);
        }
    }

    // Close the directory
    closedir(dir);

    return 0;
}
