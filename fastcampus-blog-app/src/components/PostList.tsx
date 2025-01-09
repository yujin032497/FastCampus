import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { Context, useContext, useEffect, useState } from "react";
import { db } from "firebaseApp";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { User } from "firebase/auth";
import { toast } from "react-toastify";

interface PostListProps {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

export interface PostProps {
    id?: string;
    title: string;
    email: string;
    summary: string;
    content: string;
    createdAt: string;
    updatedAt?: string;
    uid: string;
}

export default function PostList({ hasNavigation = true }: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>("all");
    const [posts, setPosts] = useState<PostProps[]>([]);
    const { user } = useContext(AuthContext);

    const getPosts = async () => {
        const datas = await getDocs(collection(db, "posts"));
        setPosts([]);
        datas?.forEach((doc) => {
            // console.log(doc.data(), doc.id);
            const dataObj = { ...doc.data(), id: doc.id };
            setPosts((prev: any) => [...prev, dataObj as PostProps]);
        });
    };

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("해당 게시글을 삭제하시겠습니까?");
        if (confirm && id) {
            await deleteDoc(doc(db, "posts", id));

            toast.success("게시글을 삭제했습니다.");
            getPosts() // 변경된 post 리스트를 다시 가져옴
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    //console.log(posts);

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("all")}
                        className={activeTab === "all" ? "post__navigation--active" : ""}>
                        전체
                    </div>
                    <div
                        role="presentation"
                        onClick={() => setActiveTab("my")}
                        className={activeTab === "my" ? "post__navigation--active" : ""}>
                        나의 글
                    </div>
                </div>
            )}

            <div className="post__list">
                {posts?.length > 0 ? posts?.map((post, index) => (
                    <div key={post?.id} className="post__box">
                        <Link to={`/posts/${post?.id}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">{post?.email}</div>
                                <div className="post__date">{post?.createdAt}</div>
                            </div>
                            <div className="post__title">{post?.title}</div>
                            <div className="post__text">{post?.summary}</div>
                        </Link>
                        {post?.email === user?.email && (
                            <div className="post__utils-box">
                                <div className="post__delete"
                                    role="presentation"
                                    onClick={() => handleDelete(post.id as string)}
                                >
                                    삭제
                                </div>
                                {/* <div className="post__edit">수정</div> */}
                                <Link to={`/posts/edit/${post?.id}`} className="post__edit">
                                    수정
                                </Link>
                            </div>
                        )}
                    </div>
                ))
                    : (
                        <div className="post__no-post">게시글이 없습니다.</div>
                    )}
            </div>
        </>
    );
}
function userContext(AuthContext: Context<{ user: User | null; }>): { user: any; } {
    throw new Error("Function not implemented.");
}

