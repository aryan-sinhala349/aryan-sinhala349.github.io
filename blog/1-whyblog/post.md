# Why Blog?
---
Hello. This is my first blog post. I'm writing this with the intent of preserving my journey as a programmer. Why is this? What purpose does writing down what I do now as a freshman have?

## Preservation
The preservation of development is extremely important to me. There have been multiple examples where developers have not preserved their work, making future projects extremely difficult. One that comes to mind immediately is Squaresoft's Final Fantasy VIII. Because Square did not keep the source code, it became difficult for them to port the game to later systems. Eventually, they had to reverse engineer the game in order to get it playable on modern systems. In order to avoid having to do something along these lines, I plan to update this blog with any major developments.

## Helping Others Learn From My Mistakes
As a young developer, I am going to make mistakes. By documenting those mistakes and my solution to those mistakes, I can potentially help myself and those who find my blog later down the line. Whether that be by explaining the theory behind my solution, or posting full code blocks, being able to have any source is helpful. On top of this, it can help me if I ever need to reference old code and get the theory behind it. For example, say I needed to remember how to make a "Hello World" program in C++ (which is obviously second nature, but this is an example), I could just do the following:

```cpp
//Get access to std::cout and std::endl
#include <iostream>

//Main function - program starts here
int main(int argc, char** argv)
{
    //Print "Hello world!" to the console and append a new line operator to the end of it
    std::cout << "Hello world!" << std::endl;
    //Return 0, implying function ran smoothly
    return 0;
}
```

# Conclusions
---
Hopefully I have convinced you that this blog serves at least some purpose, and that in the future you will not only continue to read my posts, but also start publicly preserving your work. Until next time, this has been Aryan, signing off.