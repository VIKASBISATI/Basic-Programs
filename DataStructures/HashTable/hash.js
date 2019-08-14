class Node
{
Node next;
int data;
Node(int data)
{
this.data=data;
}
}
class Hash
{
static Node table[];
static int size;
Hash(int l)
{
table=new Node[l];
size=0;
}
public static int pos(int x,int s)
{
int rem=x%s;
return rem;
}

public static boolean insert(int value)
{
size++;
Node ne=new Node(value);
int index=pos(value,table.length);
System.out.println(index);
/* if(table[index]==null)
{
table[index]=ne;
return true;
}
else
{
ne.next=table[index];
table[index]=ne;
return true;
} */
Node du=table[index];
if(table[index]==null)
{
table[index]=ne;
return true;
}
else{
while(du.next!=null)
{
du=du.next;
}
du.next=ne;
return true;
}
}
public static void dis()
{
for(int i=0;i<table.length;i++)
{
System.out.print("Indext "+i+"  : ");
Node b=table[i];
while(b!=null)
{
System.out.print(b.data);
if(b.next!=null)
System.out.print("-->");
b=b.next;
}
System.out.println();
}
}
public static int getSize()
{
return size;
}
}
public class Test
{
public static void main(String args[])
{
Scanner in=new Scanner(System.in);

System.out.println("Enter the size of the Hash Table");
int si=in.nextInt();
Hash ha=new Hash(si+1);	
Hash.insert(77);
Hash.insert(44);
Hash.insert(55);
Hash.insert(26);
Hash.insert(93);
Hash.insert(17);
Hash.insert(31);
Hash.insert(54);
Hash.insert(20);
System.out.println("The size is "+Hash.getSize());
Hash.dis();

}
}